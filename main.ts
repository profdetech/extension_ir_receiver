/**
 * IR remote
 */
//% color=#FF0000 weight=999
//% icon="\uf1eb"
namespace IR {
  /**
     *   initialiser infrarouge (portail automatique sur P13)
   */
  //% blockId=ir_init
  //% block="Initialiser le capteur infrarouge sur %pin"
  //% shim=IR::init
  //% group="Chaîne d'information - acquérir"
  export function init(pin: Pins): void {
    return
  }

  /**
     * Lorsque le bouton de la telecommande du robot mbot est appuyé. Attention à initialiser le port du recepteur infrarouge.
     */
  //% blockId=ir_received_event
  //% block="Lorsque le signal du bouton |%btn| de la télécommande est reçu"
  //% shim=IR::onPressEvent
  //% group="Chaîne d'information - acquérir"
  export function onPressEvent(btn: RemoteButton, body:Action): void {
    return
  }
}
