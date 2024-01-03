<?php

namespace NP\Controllers;

use NP\Lib\Translation;
use NP\Model\Repository\SkillRepository;

class ControllerCV extends AbstractController
{

    public static function displayIndex(): void
    {
        $skills = [
            'Languages' => (new SkillRepository())->getOrderedSkillsFromCategory('LANGUAGE'),
            Translation::translate('Outils', 'Tools') => (new SkillRepository())->getOrderedSkillsFromCategory('TOOL'),
            Translation::translate('Autres', 'Others') => (new SkillRepository())->getOrderedSkillsFromCategory('OTHER')
        ];
        self::displayView(Translation::getTitleElem_CV(), "cv/viewIndex", ['skills' => $skills]);
    }
}