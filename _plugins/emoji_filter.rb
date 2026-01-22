require 'json'

module Jekyll
  module EmojiFilter
    def emojiize(input)
      site = @context.registers[:site]
      emojis_file = File.join(site.source, "_data", "emojis.json")
      emojis = JSON.parse(File.read(emojis_file))

      input.gsub(/:([a-z0-9_+-]+):/) do |match|
        key = $1
        if emojis[key]
          %(<img
              src="#{emojis[key]}"
              alt=":#{key}:"
              class="emoji"
              width="20"
              height="20"
              loading="lazy"
            />)
        else
          match
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::EmojiFilter)
