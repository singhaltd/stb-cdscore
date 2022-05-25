import Refgen from "App/Models/Refgen";
export default class Ulity {
  public async genrrn(prd, brn) {
    var numpad = "0000000";
    var rekey = "";
    try {
      const refincrea = await Refgen.firstOrCreate(
        { product: prd, branch: brn },
        { product: prd, branch: brn, sec: 0 }
      );
      refincrea.sec = parseInt(refincrea.$attributes["sec"]) + 1;
      await refincrea.save();

      if (refincrea) {
        rekey = refincrea.$attributes["sec"].toString();
      }
    } catch (e) {
      const refincrea = await Refgen.firstOrCreate(
        { product: prd, branch: brn },
        { product: prd, branch: brn, sec: 0 }
      );
      refincrea.sec = parseInt(refincrea.$attributes["sec"]) + 1;
      await refincrea.save();

      if (refincrea) {
        rekey = refincrea.$attributes["sec"].toString();
      }
    }

    return (
      brn + numpad.substring(0, numpad.length - rekey.length) +
      parseInt(rekey)
    );
  }
}
