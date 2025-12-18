<?php

namespace App\Http;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Twig\TemplateWrapper;

class View
{
    private FileSystemLoader $fileSystemLoader;
    private Environment $twig;
    private string $template;
    private ?TemplateWrapper $templateWrapper = null;
    private array $context = [];

    public function __construct(string $view_path) {
        $this->fileSystemLoader = new FilesystemLoader('./templates');
        $this->twig = new Environment($this->fileSystemLoader);
        $this->template = $view_path . ".html.twig";
    }

    public function with(array $context) : self {
        $this->context = array_merge($this->context, $context);
        return $this;
    }

    public function __toString() {
        if (!$this->templateWrapper) {
            $this->templateWrapper = $this->twig->load($this->template);
        }

        return $this->templateWrapper->render($this->context);
    }
}