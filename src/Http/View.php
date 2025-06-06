<?php

namespace App\Http;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Twig\TemplateWrapper;

class View
{
    private FileSystemLoader $fileSystemLoader;
    private Environment $twig;
    private TemplateWrapper $template;

    public function __construct(string $view_path) {
        $this->fileSystemLoader = new FilesystemLoader('templates');
        $this->twig = new Environment($this->fileSystemLoader);
        $template_path = str_replace('.', '/', strtolower($view_path));
        $this->template = $this->twig->load("$template_path.html.twig");
    }
}