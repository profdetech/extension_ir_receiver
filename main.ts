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
   //% group="Chaîne d'information - acquérir"
  //% shim=IR::init
  export function init(pin: Pins): void {
    return
  }

  /**
     * Lorsque le bouton de la telecommande du robot mbot est appuyé. Attention à initialiser le port du recepteur infrarouge.
     */
  //% blockId=ir_received_event
  //% block="Lorsque le signal du bouton |%btn| de la télécommande est reçu"
   //% group="Chaîne d'information - acquérir"
  //% shim=IR::onPressEvent
  export function onPressEvent(btn: RemoteButton, body:Action): void {
    return
  }
}
