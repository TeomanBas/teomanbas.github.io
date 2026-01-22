module Jekyll
  class TerminalBlock < Liquid::Block
    Syntax = /^\s*(\w+)?\s*$/  

    def initialize(tag_name, markup, tokens)
      super
      if markup =~ Syntax
        @lang = $1 || "text"
      else
        raise SyntaxError.new("Syntax Error in 'terminal' - Valid syntax: terminal [language]")
      end
    end

    def render(context)
      code = super.strip
      data_lang = "data-lang=\"#{@lang}\""


      <<~HTML
        <pre  #{data_lang}>
          <code class="language-#{@lang}">#{code}</code>
        </pre>
      HTML
    end
  end
end

Liquid::Template.register_tag('code', Jekyll::TerminalBlock)

# kullanımı
#{% code python %}
#def hello():
#    print("Hello world")
#{% endcode %}
