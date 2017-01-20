<?php
namespace In2code\Powermail\ViewHelpers\String;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * ViewHelper combines Raw and RemoveXss Methods
 *
 * @package TYPO3
 * @subpackage Fluid
 */
class RawAndRemoveXssViewHelper extends AbstractViewHelper
{

    /**
     * Disable the escaping because otherwise the child nodes would be escaped before
     * can decode the text's entities.
     *
     * @var boolean
     */
    protected $escapingInterceptorEnabled = false;

    /**
     * @var \TYPO3\CMS\Extbase\Object\ObjectManagerInterface
     * @inject
     */
    protected $objectManager;

    /**
     * ViewHelper combines Raw and RemoveXss Methods
     *
     * @return string
     */
    public function render()
    {
        $string = $this->renderChildren();
        $string = GeneralUtility::removeXSS($string);

        return $string;
    }
}
