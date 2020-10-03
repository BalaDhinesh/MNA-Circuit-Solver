// Dictionary to store the count of individual elements
ele_count = {
  resistor: 0,
  curr_src: 0,
  volt_src: 0,
  vccs: 0,
  vcvs: 0,
  cccs_gen: 0,
  cccs_vs: 0,
  ccvs_gen: 0,
  ccvs_vs: 0,
};

resistor_list = [];
curr_src_list = [];
volt_src_list = [];
vccs_list = [];
vcvs_list = [];
cccs_gen_list = [];
cccs_vs_list = [];
ccvs_gen_list = [];
ccvs_vs_list = [];

var input_fields = [];
var ele_code = [];

class resistor {
  constructor(ele_code, resistor_value, node_high, node_low) {
    this.ele_code = ele_code;
    this.resistor_value = resistor_value;
    this.node_high = node_high;
    this.node_low = node_low;
  }
}

class curr_src {
  constructor(ele_code, current, node_high, node_low) {
    this.ele_code = ele_code;
    this.current = current;
    this.node_high = node_high;
    this.node_low = node_low;
  }
}

class volt_src {
  constructor(ele_code, voltage, node_high, node_low) {
    this.ele_code = ele_code;
    this.voltage = voltage;
    this.node_high = node_high;
    this.node_low = node_low;
  }
}
class vccs {
  constructor(
    ele_code,
    trans_conductance,
    node_high,
    node_low,
    control_vol_node_high,
    control_vol_node_low
  ) {
    this.ele_code = ele_code;
    this.trans_conductance = trans_conductance;
    this.node_high = node_high;
    this.node_low = node_low;
    this.control_vol_node_high = control_vol_node_high;
    this.control_vol_node_low = control_vol_node_low;
  }
}
class vcvs {
  constructor(
    ele_code,
    control_factor,
    node_high,
    node_low,
    control_vol_node_high,
    control_vol_node_low
  ) {
    this.ele_code = ele_code;
    this.control_factor = control_factor;
    this.node_high = node_high;
    this.node_low = node_low;
    this.control_vol_node_high = control_vol_node_high;
    this.control_vol_node_low = control_vol_node_low;
  }
}
class cccs_gen {
  constructor(
    ele_code,
    control_factor,
    node_high,
    node_low,
    control_vol_node_high,
    control_vol_node_low
  ) {
    this.ele_code = ele_code;
    this.control_factor = control_factor;
    this.node_high = node_high;
    this.node_low = node_low;
    this.control_vol_node_high = control_vol_node_high;
    this.control_vol_node_low = control_vol_node_low;
  }
}
class cccs_vs {
  constructor(
    ele_code,
    control_factor,
    node_high,
    node_low,
    control_vol_node_high,
    control_vol_node_low
  ) {
    this.ele_code = ele_code;
    this.control_factor = control_factor;
    this.node_high = node_high;
    this.node_low = node_low;
    this.control_vol_node_high = control_vol_node_high;
    this.control_vol_node_low = control_vol_node_low;
  }
}
class ccvs_gen {
  constructor(
    ele_code,
    trans_resistance,
    node_high,
    node_low,
    control_vol_node_high,
    control_vol_node_low
  ) {
    this.ele_code = ele_code;
    this.trans_resistance = trans_resistance;
    this.node_high = node_high;
    this.node_low = node_low;
    this.control_vol_node_high = control_vol_node_high;
    this.control_vol_node_low = control_vol_node_low;
  }
}
class ccvs_vs {
  constructor(
    ele_code,
    trans_resistance,
    node_high,
    node_low,
    control_vol_node_high,
    control_vol_node_low
  ) {
    this.ele_code = ele_code;
    this.trans_resistance = trans_resistance;
    this.node_high = node_high;
    this.node_low = node_low;
    this.control_vol_node_high = control_vol_node_high;
    this.control_vol_node_low = control_vol_node_low;
  }
}

function get_input_fields(ele_code) {
  if (ele_code == 1) {
    ele_count["resistor"] = ele_count["resistor"] + 1;

    var fields_to_ask = [
      "Enter the resistance value (in ohms):",
      "Enter the high potential node of the resistance: ",
      "Enter the low potential node of the resistance: ",
    ];
    return fields_to_ask;
  }
  if (ele_code == 2) {
    ele_count["curr_src"] = ele_count["curr_src"] + 1;

    var fields_to_ask = [
      "Enter the current value (in amperes): ",
      "Enter the high potential node to which the current source is connected:",
      "Enter the low potential node to which the current source is connected: ",
    ];
    return fields_to_ask;
  }
  if (ele_code == 3) {
    ele_count["volt_src"] = ele_count["volt_src"] + 1;

    var fields_to_ask = [
      "Enter the voltage value (in volts):",
      "Enter the high potential node to which the voltage source is connected:",
      "Enter the low potential node to which the voltage source is connected: ",
    ];
    return fields_to_ask;
  }
  if (ele_code == 4) {
    ele_count["vccs"] = ele_count["vccs"] + 1;

    var fields_to_ask = [
      "Enter the trans-conductance value (in siemens): ",
      "Enter the high potential node to which the controlled current source is connected: ",
      "Enter the low potential node to which the controlled current source is connected: ",
      "Enter the high potential node to which the controlling voltage is connected: ",
      "Enter the low potential node to which the controlling voltage is connected: ",
    ];
    return fields_to_ask;
  }
  if (ele_code == 5) {
    ele_count["vcvs"] = ele_count["vcvs"] + 1;

    var fields_to_ask = [
      "Enter the control-factor value: ",
      "Enter the high potential node to which the controlled voltage source is connected: ",
      "Enter the low potential node to which the controlled voltage source is connected: ",
      "Enter the high potential node to which the controlling voltage is connected: ",
      "Enter the low potential node to which the controlling voltage is connected: ",
    ];
    return fields_to_ask;
  }
  if (ele_code == 6) {
    ele_count["cccs_gen"] = ele_count["cccs_gen"] + 1;

    var fields_to_ask = [
      "Enter the control-factor value: ",
      "Enter the high potential node to which the controlled current source is connected: ",
      "Enter the low potential node to which the controlled current source is connected: ",
      "Enter the high potential node from which the controlling current flows: ",
      "Enter the low potential node from which the controlling current flows: ",
    ];
    return fields_to_ask;
  }
  if (ele_code == 7) {
    ele_count["cccs_vs"] = ele_count["cccs_vs"] + 1;

    var fields_to_ask = [
      "Enter the control-factor value: ",
      "Enter the high potential node to which the controlled current source is connected: ",
      "Enter the low potential node to which the controlled current source is connected: ",
      "Enter the high potential node from which the controlling current flows:",
      "Enter the low potential node from which the controlling current flows: ",
    ];
    return fields_to_ask;
  }
  if (ele_code == 8) {
    ele_count["ccvs_gen"] = ele_count["ccvs_gen"] + 1;

    var fields_to_ask = [
      "Enter the trans-resistance value (in ohms): ",
      "Enter the high potential node to which the controlled voltage source is connected: ",
      "Enter the low potential node to which the controlled voltage source is connected: ",
      "Enter the high potential node from which the controlling current flows: ",
      "Enter the low potential node from which the controlling current flows: ",
    ];
    return fields_to_ask;
  }
  if (ele_code == 9) {
    ele_count["ccvs_vs"] = ele_count["ccvs_vs"] + 1;

    var fields_to_ask = [
      "Enter the trans-resistance value: ",
      "Enter the high potential node to which the controlled voltage source is connected: ",
      "Enter the low potential node to which the controlled voltage source is connected: ",
      "Enter the high potential node from which the controlling current flows: ",
      "Enter the low potential node from which the controlling current flows: ",
    ];
    return fields_to_ask;
  }
}

function showdialog() {
  var elements = parseInt(document.getElementById("elements").value);

  var form = document.createElement("form");
  form.setAttribute("class", "ele-code");

  for (i = 0; i < elements; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "input-group ele-code-pad");

    var span = document.createElement("span");
    span.setAttribute("class", "input-group-text input-group-prepend");
    span.setAttribute("id", "basic-addon1");
    span.innerHTML = "Element kind of " + (i + 1);
    div.appendChild(span);

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("id", "ele_code" + (i + 1));
    FN.setAttribute("class", "form-control");
    div.appendChild(FN);
    form.appendChild(div);
  }
  var s = document.createElement("button");
  s.innerHTML = "Submit";
  s.setAttribute("onclick", "getInputs()");
  s.setAttribute("type", "button");
  s.setAttribute("class", "btn btn-dark submit");

  form.appendChild(s);

  document.body.appendChild(form);
}

function getInputs() {
  var elements = parseInt(document.getElementById("elements").value);
  for (var i = 0; i < parseInt(elements); i++) {
    var code = parseInt(document.getElementById("ele_code" + (i + 1)).value);
    ele_code.push(code);
  }
  for (var i = 0; i < ele_code.length; i++) {
    var input_field = get_input_fields(ele_code[i]);
    input_fields.push(input_field);
  }
  var form = document.createElement("form");
  form.setAttribute("class", "container values");

  for (i = 0; i < input_fields.length; i++) {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "jumbotron");
    var heading = document.createElement("h3");
    heading.innerHTML = "Element" + (i + 1) + " :";
    div1.appendChild(heading);

    for (var j = 0; j < input_fields[i].length; j++) {
      // var LABEL = document.createElement("label");
      // LABEL.innerHTML = "Element" + (i + 1) + " :" + input_fields[i][j];
      // form.appendChild(LABEL);

      var div = document.createElement("div");
      div.setAttribute("class", "input-group value");

      var span = document.createElement("span");
      span.setAttribute("class", "input-group-text input-group-prepend");
      span.setAttribute("id", "basic-addon1");
      span.innerHTML = input_fields[i][j];
      div.appendChild(span);

      var IN = document.createElement("input");
      IN.setAttribute("type", "text");
      IN.setAttribute("id", i + "&" + j);

      div.appendChild(IN);
      div1.appendChild(div);
    }
    form.appendChild(div1);
  }
  var s = document.createElement("button");
  s.innerHTML = "Submit";
  s.setAttribute("onclick", "printResults()");
  s.setAttribute("type", "button");
  s.setAttribute("class", "btn btn-dark submit");

  form.appendChild(s);

  document.body.appendChild(form);
}
function printResults() {
  var field_values_final = [];
  var elements = parseInt(document.getElementById("elements").value);

  for (i = 0; i < input_fields.length; i++) {
    var field_values = [];

    for (var j = 0; j < input_fields[i].length; j++) {
      var field_value = parseFloat(document.getElementById(i + "&" + j).value);
      field_values.push(field_value);
    }
    field_values_final.push(field_values);
  }
  for (var k = 0; k < elements; k++) {
    if (ele_code[k] == 1) {
      var code = 1;
      var r_val = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      const res = new resistor(code, r_val, n_h, n_l);
      resistor_list.push(res);
    } else if (ele_code[k] == 2) {
      var code = 2;
      var i_val = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      var curr = new curr_src(code, i_val, n_h, n_l);
      curr_src_list.push(curr);
    } else if (ele_code[k] == 3) {
      var code = 3;
      var v_val = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      var volt = new volt_src(code, v_val, n_h, n_l);
      volt_src_list.push(volt);
    } else if (ele_code[k] == 4) {
      var code = 4;
      var tr_con = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      var cont_n_h = field_values_final[k][3];
      var cont_n_l = field_values_final[k][4];
      var vccsList = (code, tr_con, n_h, n_l, cont_n_h, cont_n_l);
      vccs_list.push(vccsList);
    } else if (ele_code[k] == 5) {
      var code = 5;
      var con_ftr = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      var cont_n_h = field_values_final[k][3];
      var cont_n_l = field_values_final[k][4];
      var vcvsList = new vcvs(code, con_ftr, n_h, n_l, cont_n_h, cont_n_l);
      vcvs_list.push(vcvsList);
    } else if (elements[k] == 6) {
      var code = 6;
      var con_ftr = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      var cont_n_h = field_values_final[k][3];
      var cont_n_l = field_values_final[k][4];
      var cccsGen = new cccs_gen(code, con_ftr, n_h, n_l, cont_n_h, cont_n_l);
      cccs_gen_list.push(cccsGen);
    } else if (elements[k] == 7) {
      var code = 7;
      var con_ftr = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      var cont_n_h = field_values_final[k][3];
      var cont_n_l = field_values_final[k][4];
      var cccsVs = new cccs_vs(code, con_ftr, n_h, n_l, cont_n_h, cont_n_l);
      cccs_vs_list.push(cccsVs);
    } else if (elements[k] == 8) {
      var code = 8;
      var tr_res = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      var cont_n_h = field_values_final[k][3];
      var cont_n_l = field_values_final[k][4];
      var ccvsGen = new ccvs_gen(code, tr_res, n_h, n_l, cont_n_h, cont_n_l);
      ccvs_gen_list.push(ccvsGen);
    } else if (elements[k] == 9) {
      var code = 9;
      var tr_res = field_values_final[k][0];
      var n_h = field_values_final[k][1];
      var n_l = field_values_final[k][2];
      var cont_n_h = field_values_final[k][3];
      var cont_n_l = field_values_final[k][4];
      var ccvsVs = new ccvs_vs(code, tr_res, n_h, n_l, cont_n_h, cont_n_l);
      ccvs_vs_list.push(ccvsVs);
    }
  }

  //Static method of creating the matrix and fixing the size
  var nodes = parseInt(document.getElementById("nodes").value);

  var size =
    parseInt(nodes) +
    ele_count["volt_src"] +
    ele_count["vcvs"] +
    2 * (ele_count["cccs_gen"] + ele_count["cccs_vs"]) +
    3 * (ele_count["ccvs_gen"] + ele_count["ccvs_vs"]);
  var cond_matrix = Array(size)
    .fill()
    .map(() => Array(size).fill(0));
  var curr_matrix = Array(size)
    .fill()
    .map(() => Array(1).fill(0));
  var var_matrix = Array(size)
    .fill()
    .map(() => Array(1).fill(0));

  var var_list = [];
  for (let i = 0; i < nodes; i++) {
    var_list.push("V_" + String(i + 1));
  }

  // Variable for selecting apt the column of conductance and current matrix
  var obj_volt_src_cnt = 0;
  var obj_vccs_cnt = 0; // Variable for selecting the apt column if the element is a vccs
  var obj_vcvs_cnt = 0;
  var obj_cccs_gen_cnt = 0;
  var obj_cccs_vs_cnt = 0;
  var obj_ccvs_gen_cnt = 0;
  var obj_ccvs_vs_cnt = 0;

  for (var obj = 0; obj < resistor_list.length; obj++) {
    //  Contributes only to conductance matrix
    var n_k = parseInt(resistor_list[obj].node_high) - 1;
    var n_l = parseInt(resistor_list[obj].node_low) - 1;
    var conductance = 1.0 / parseFloat(resistor_list[obj].resistor_value);

    if (n_k != -1 && n_l != -1) {
      cond_matrix[n_k][n_k] += conductance;
      cond_matrix[n_k][n_l] -= conductance;
      cond_matrix[n_l][n_k] -= conductance;
      cond_matrix[n_l][n_l] += conductance;
    } else if (n_k == -1 && n_l != -1) {
      cond_matrix[n_l][n_l] += conductance;
    } else if (n_l == -1 && n_k != -1) {
      cond_matrix[n_k][n_k] += conductance;
    }
  }

  for (var obj = 0; obj < curr_src_list.length; obj++) {
    // Contributes only to cuurent matrix
    var n_k = parseInt(curr_src_list[obj].node_high) - 1;
    var n_l = parseInt(curr_src_list[obj].node_low) - 1;
    var current = parseFloat(curr_src_list[obj].current);

    if (n_k != -1 && n_l != -1) {
      curr_matrix[n_k][0] += current;
      curr_matrix[n_l][0] -= current;
    } else if (n_k == -1 && n_l != -1) {
      curr_matrix[n_l][0] -= current;
    } else if (n_k != -1 && n_l == -1) {
      curr_matrix[n_k][0] += current;
    }
  }

  for (var obj = 0; obj < volt_src_list.length; obj++) {
    //  The following code is only when there is one voltage source in the circuit
    // Contributes to both current and conductance matrix
    var n_k = parseInt(volt_src_list[obj].node_high) - 1;
    var n_l = parseInt(volt_src_list[obj].node_low) - 1;
    var voltage = parseFloat(volt_src_list[obj].voltage);
    var count = 0;
    var new_var = "I_" + String(n_k + 1) + "_" + String(n_l + 1);
    for (var i = 0; i < var_list.length; i++) {
      if (var_list[i] == new_var) {
        count = count + 1;
      }
    }
    if (count == 0) {
      var_list.push(new_var);
    }

    if (n_k != -1 && n_l != -1) {
      cond_matrix[n_k][parseInt(nodes) + obj_volt_src_cnt] += 1;
      cond_matrix[n_l][parseInt(nodes) + obj_volt_src_cnt] -= 1;
      cond_matrix[parseInt(nodes) + obj_volt_src_cnt][n_k] += 1;
      cond_matrix[parseInt(nodes) + obj_volt_src_cnt][n_l] -= 1;

      curr_matrix[parseInt(nodes) + obj_volt_src_cnt][0] += voltage;
      obj_volt_src_cnt += 1;
    } else if (n_k == -1 && n_l != -1) {
      cond_matrix[n_l][parseInt(nodes) + obj_volt_src_cnt] -= 1;
      cond_matrix[parseInt(nodes) + obj_volt_src_cnt][n_l] -= 1;

      curr_matrix[parseInt(nodes) + obj_volt_src_cnt][0] += voltage;

      obj_volt_src_cnt += 1;
    } else if (n_l == -1 && n_k != -1) {
      cond_matrix[n_k][parseInt(nodes) + obj_volt_src_cnt] += 1;
      cond_matrix[parseInt(nodes) + obj_volt_src_cnt][n_k] += 1;

      curr_matrix[parseInt(nodes) + obj_volt_src_cnt][0] += voltage;

      obj_volt_src_cnt += 1;
    }
  }
  for (var obj = 0; obj < vccs_list.length; obj++) {
    var n_k = parseInt(vccs_list[obj].node_high) - 1;
    var n_l = parseInt(vccs_list[obj].node_low) - 1;
    var ctrl_n_m = parseInt(vccs_list[obj].control_vol_node_high) - 1;
    var ctrl_n_n = parseInt(vccs_list[obj].control_vol_node_low) - 1;
    var transconductance = parseFloat(vccs_list[obj].trans_conductance);

    if (n_k != -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][ctrl_n_m] += transconductance;
      cond_matrix[n_k][ctrl_n_n] -= transconductance;
      cond_matrix[n_l][ctrl_n_m] -= transconductance;
      cond_matrix[n_l][ctrl_n_n] += transconductance;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_l][ctrl_n_m] -= transconductance;
      cond_matrix[n_l][ctrl_n_n] += transconductance;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][ctrl_n_m] += transconductance;
      cond_matrix[n_k][ctrl_n_n] -= transconductance;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][ctrl_n_n] -= transconductance;
      cond_matrix[n_l][ctrl_n_n] += transconductance;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_k][ctrl_n_m] += transconductance;
      cond_matrix[n_l][ctrl_n_m] -= transconductance;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_l][ctrl_n_n] += transconductance;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_l][ctrl_n_m] -= transconductance;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][ctrl_n_n] -= transconductance;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_k][ctrl_n_m] += transconductance;
    }
  }

  // VCVS contributes only to the conductance matrix
  for (var obj = 0; obj < vcvs_list.length; obj++) {
    var n_k = parseInt(vcvs_list[obj].node_high) - 1;
    var n_l = parseInt(vcvs_list[obj].node_low) - 1;
    var ctrl_n_m = parseInt(vcvs_list[obj].control_vol_node_high) - 1;
    var ctrl_n_n = parseInt(vcvs_list[obj].control_vol_node_low) - 1;
    var ctrl_ftr = parseInt(vcvs_list[obj].control_factor);

    if (n_k != -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_k
      ] += 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_l
      ] -= 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_m
      ] -= ctrl_ftr;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_n
      ] += ctrl_ftr;
      cond_matrix[n_k][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] += 1;
      cond_matrix[n_l][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] -= 1;

      obj_vcvs_cnt += 1;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_l
      ] -= 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_m
      ] -= ctrl_ftr;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_n
      ] += ctrl_ftr;
      cond_matrix[n_l][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] -= 1;

      obj_vcvs_cnt += 1;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_k
      ] += 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_m
      ] -= ctrl_ftr;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_n
      ] += ctrl_ftr;
      cond_matrix[n_k][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] += 1;

      obj_vcvs_cnt += 1;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_k
      ] += 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_l
      ] -= 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_n
      ] += ctrl_ftr;
      cond_matrix[n_k][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] += 1;
      cond_matrix[n_l][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] -= 1;

      obj_vcvs_cnt += 1;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_k
      ] += 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_l
      ] -= 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_m
      ] -= ctrl_ftr;
      cond_matrix[n_k][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] += 1;
      cond_matrix[n_l][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] -= 1;

      obj_vcvs_cnt += 1;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_l
      ] -= 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_n
      ] += ctrl_ftr;
      cond_matrix[n_l][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] -= 1;

      obj_vcvs_cnt += 1;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_l
      ] -= 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_m
      ] -= ctrl_ftr;
      cond_matrix[n_l][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] -= 1;

      obj_vcvs_cnt += 1;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_k
      ] += 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_n
      ] += ctrl_ftr;
      cond_matrix[n_k][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] += 1;

      obj_vcvs_cnt += 1;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        n_k
      ] += 1;
      cond_matrix[parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt][
        ctrl_n_m
      ] -= ctrl_ftr;
      cond_matrix[n_k][
        parseInt(nodes) + ele_count["volt_src"] + obj_vcvs_cnt
      ] += 1;

      obj_vcvs_cnt += 1;
    }
  }

  // CCCS contributes only to the conductance matrix
  for (var obj = 0; obj < cccs_gen_list.length; obj++) {
    var n_k = parseInt(cccs_gen_list[obj].node_high) - 1;
    var n_l = parseInt(cccs_gen_list[obj].node_low) - 1;
    var ctrl_n_m = parseInt(cccs_gen_list[obj].control_vol_node_high) - 1;
    var ctrl_n_n = parseInt(cccs_gen_list[obj].control_vol_node_low) - 1;
    var ctrl_ftr = parseInt(cccs_gen_list[obj].control_factor);

    var new_var_V = "V_" + String(ctrl_n_m + 1) + "_";
    var var_list = var_list
      .slice(0, ctrl_n_m + 1)
      .concat(new_var_V, var_list.slice(ctrl_n_m + 1));
    // cond_matrix = cond_matrix.slice(0, ctrl_n_m+1).push(Array(size).fill(0))
    // cond_matrix = cond_matrix.push(cond_matrix.slice(ctrl_n_m+1))
    // cond_matrix1 = cond_matrix.slice(0, ctrl_n_m+1)

    // for( var k=0; k<size; k++){
    //   cond_matrix1[i][size] = 0;
    // }

    var cond_matrix1 = cond_matrix
      .slice(0, ctrl_n_m + 1)
      .push(Array(size).fill(0));
    cond_matrix1 = cond_matrix1.push(cond_matrix.slice(ctrl_n_m + 1));
    cond_matrix = cond_matrix1;
    varcond_matrix2 = cond_matrix.slice(
      cond_matrix.slice(0).map((i) => i.slice(0, ctrl_n_m + 1))
    );
    var cond_matrix3 = cond_matrix.slice(0).map((i) => i.slice(ctrl_n_m + 1));
    for (var j = 0; j < cond_matrix2.length; j++) {
      cond_matrix2[j][cond_matrix2.length] = 0;
    }
    for (var j = 0; j < cond_matrix2.length; j++) {
      for (var k = cond_matrix2.length; k < size + 1; k++) {
        cond_matrix2[j][k] = cond_matrix3[j][k - cond_matrix2.length];
      }
    }
    cond_matrix = cond_matrix2;
    curr_matrix1 = curr_matrix
      .slice(0, ctrl_n_m + 1)
      .push(Array(cond_matrix.size).fill(0));
    curr_matrix1 = curr_matrix1.push(curr_matrix.slice(ctrl_n_m + 1));
    curr_matrix = curr_matrix1;
    // cond_matrix = np.concatenate((cond_matrix.slice((0,(ctrl_n_m+1)), :], np.zeros((1, cond_matrix.shape[0])), cond_matrix[(ctrl_n_m+1):, :]), axis=0)
    // cond_matrix = np.concatenate((cond_matrix[:, :(ctrl_n_m+1)], np.zeros((cond_matrix.shape[0], 1)), cond_matrix[:, (ctrl_n_m+1):]), axis=1)
    // curr_matrix = np.concatenate((curr_matrix[:(ctrl_n_m+1), :], np.zeros((1, 1)), curr_matrix[(ctrl_n_m+1):, :]), axis=0)

    var new_var_I = "I_" + String(ctrl_n_m + 1) + "_" + String(ctrl_n_n + 1);
    var_list.push(new_var_I);
    cond_matrix.push(Array(size).fill(0));
    for (var j = 0; j < size; j++) {
      cond_matrix[i][size] = 0;
    }
    curr_matrix.push(0);
    // cond_matrix = np.concatenate((cond_matrix, np.zeros((1, cond_matrix.shape[0]))), axis=0)
    // cond_matrix = np.concatenate((cond_matrix, np.zeros((cond_matrix.shape[0], 1))), axis=1)
    // curr_matrix = np.concatenate((curr_matrix, np.zeros((1, 1))), axis=0)

    var i_mn = var_list.index(
      "I_" + str(ctrl_n_m + 1) + "_" + str(ctrl_n_n + 1)
    );
    if (n_k != -1) {
      n_k = var_list.index("V_" + str(n_k + 1));
    }
    if (n_l != -1) {
      n_l = var_list.index("V_" + str(n_l + 1));
    }
    if (ctrl_n_m != -1) {
      ctrl_n_m = var_list.index("V_" + str(ctrl_n_m + 1));
      ctrl_n_n = var_list.index("V_" + str(ctrl_n_m + 1));
    }

    if (n_k != -1 && n_l != -1 && ctrl_n_m != -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1) {
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m == -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m == -1) {
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m == -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
    }
  }

  // CCCS contributes only to the conductance matrix
  for (var obj = 0; obj < cccs_vs_list.length; obj++) {
    var n_k = parseInt(cccs_vs_list[obj].node_high) - 1;
    var n_l = parseInt(cccs_vs_list[obj].node_low) - 1;
    var ctrl_n_m = parseInt(cccs_vs_list[obj].control_vol_node_high) - 1;
    var ctrl_n_n = parseInt(cccs_vs_list[obj].control_vol_node_low) - 1;
    var ctrl_ftr = parseInt(cccs_vs_list[obj].control_factor);

    var i_mn = var_list.indexOf(
      "I_" + String(ctrl_n_m + 1) + "_" + String(ctrl_n_n + 1)
    );
    if (n_k != -1) {
      n_k = var_list.indexOf("V_" + String(n_k + 1));
    }
    if (n_l != -1) {
      n_l = var_list.indexOf("V_" + String(n_l + 1));
    }
    if (ctrl_n_m != -1) {
      ctrl_n_m = var_list.indexOf("V_" + String(ctrl_n_m + 1));
    }
    if (ctrl_n_n != -1) {
      ctrl_n_n = var_list.indexOf("V_" + String(ctrl_n_m + 1));
    }

    if (n_k != -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_l][i_mn] -= ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_k][i_mn] += ctrl_ftr;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
    }
  }

  // CCVS contributes only to the conductance matrix
  for (var obj = 0; obj < ccvs_gen_list.length; obj++) {
    var n_k = parseInt(ccvs_gen_list[obj].node_high) - 1;
    var n_l = parseInt(ccvs_gen_list[obj].node_low) - 1;
    var ctrl_n_m = parseInt(ccvs_gen_list[obj].control_vol_node_high) - 1;
    var ctrl_n_n = parseInt(ccvs_gen_list[obj].control_vol_node_low) - 1;
    var transresistance = parseFloat(ccvs_gen_list[obj].trans_resistance);

    var new_var_V = "V_" + String(ctrl_n_m + 1) + "_";
    var var_list =
      var_list.slice(0, ctrl_n_m + 1) +
      [new_var_V] +
      var_list.slice(ctrl_n_m + 1);

    var cond_matrix1 = cond_matrix
      .slice(0, ctrl_n_m + 1)
      .push(Array(size).fill(0));
    cond_matrix1 = cond_matrix1.push(cond_matrix.slice(ctrl_n_m + 1));
    cond_matrix = cond_matrix1;
    var cond_matrix2 = cond_matrix.slice(
      cond_matrix.slice(0).map((i) => i.slice(0, ctrl_n_m + 1))
    );
    var cond_matrix3 = cond_matrix.slice(0).map((i) => i.slice(ctrl_n_m + 1));
    for (var j = 0; j < cond_matrix2.length; j++) {
      cond_matrix2[j][cond_matrix2.length] = 0;
    }
    for (var j = 0; j < cond_matrix2.length; j++) {
      for (var k = cond_matrix2.length; k < size + 1; k++) {
        cond_matrix2[j][k] = cond_matrix3[j][k - cond_matrix2.length];
      }
    }
    cond_matrix = cond_matrix2;
    curr_matrix1 = curr_matrix
      .slice(0, ctrl_n_m + 1)
      .push(Array(cond_matrix.size).fill(0));
    curr_matrix1 = curr_matrix1.push(curr_matrix.slice(ctrl_n_m + 1));
    curr_matrix = curr_matrix1;
    // cond_matrix = np.concatenate((cond_matrix[:(ctrl_n_m+1), :], np.zeros((1, cond_matrix.shape[0])), cond_matrix[(ctrl_n_m+1):, :]), axis=0)
    // cond_matrix = np.concatenate((cond_matrix[:, :(ctrl_n_m+1)], np.zeros((cond_matrix.shape[0], 1)), cond_matrix[:, (ctrl_n_m+1):]), axis=1)
    // curr_matrix = np.concatenate((curr_matrix[:(ctrl_n_m+1), :], np.zeros((1, 1)), curr_matrix[(ctrl_n_m+1):, :]), axis=0)

    var new_var_I = "I_" + String(ctrl_n_m + 1) + "_" + String(ctrl_n_n + 1);
    var_list.push(new_var_I);
    cond_matrix.push(Array(size).fill(0));
    for (var j = 0; j < size; j++) {
      cond_matrix[i][size] = 0;
    }
    curr_matrix.push(0);
    // cond_matrix = np.concatenate((cond_matrix, np.zeros((1, cond_matrix.shape[0]))), axis=0)
    // cond_matrix = np.concatenate((cond_matrix, np.zeros((cond_matrix.shape[0], 1))), axis=1)
    // curr_matrix = np.concatenate((curr_matrix, np.zeros((1, 1))), axis=0)

    var new_var_I = "I_" + String(n_k + 1) + "_" + String(n_l + 1);
    var_list.push(new_var_I);
    cond_matrix.push(Array(size).fill(0));
    for (var j = 0; j < size; j++) {
      cond_matrix[i][size] = 0;
    }
    curr_matrix.push(0);
    // cond_matrix = np.concatenate((cond_matrix, np.zeros((1, cond_matrix.shape[0]))), axis=0)
    // cond_matrix = np.concatenate((cond_matrix, np.zeros((cond_matrix.shape[0], 1))), axis=1)
    // curr_matrix = np.concatenate((curr_matrix, np.zeros((1, 1))), axis=0)

    var i_mn = var_list.indexOf(
      "I_" + String(ctrl_n_m + 1) + "_" + String(ctrl_n_n + 1)
    );
    var i_kl = var_list.indexOf("I_" + String(n_k + 1) + "_" + String(n_l + 1));
    if (n_k != -1) {
      n_k = var_list.indexOf("V_" + String(n_k + 1));
    }
    if (n_l != -1) {
      n_l = var_list.indexOf("V_" + String(n_l + 1));
    }
    if (ctrl_n_m != -1) {
      ctrl_n_m = var_list.indexOf("V_" + String(ctrl_n_m + 1));
      ctrl_n_n = var_list.indexOf("V_" + String(ctrl_n_m + 1));
    }

    if (n_k != -1 && n_l != -1 && ctrl_n_m != -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1) {
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m == -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m == -1) {
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m == -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[ctrl_n_m + 1][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m + 1] -= 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    }
  }

  // CCVS contributes only to the conductance matrix
  for (var obj = 0; obj < ccvs_vs_list.length; obj++) {
    var n_k = parseInt(ccvs_vs_list[obj].node_high) - 1;
    var n_l = parseInt(ccvs_vs_list[obj].node_low) - 1;
    var ctrl_n_m = parseInt(ccvs_vs_list[obj].control_vol_node_high) - 1;
    var ctrl_n_n = parseInt(ccvs_vs_list[obj].control_vol_node_low) - 1;
    var transresistance = parseFloat(ccvs_vs_list[obj].trans_resistance);

    var new_var_I = "I_" + String(ctrl_n_m + 1) + "_" + String(ctrl_n_n + 1);
    var_list.push(new_var_I);
    cond_matrix.push(Array(size).fill(0));
    for (var j = 0; j < size; j++) {
      cond_matrix[i][size] = 0;
    }
    curr_matrix.push(0);
    // cond_matrix = np.concatenate(
    //   (cond_matrix, np.zeros((1, cond_matrix.shape[0]))),
    //   (axis = 0)
    // );
    // cond_matrix = np.concatenate(
    //   (cond_matrix, np.zeros((cond_matrix.shape[0], 1))),
    //   (axis = 1)
    // );
    // curr_matrix = np.concatenate((curr_matrix, np.zeros((1, 1))), (axis = 0));

    var new_var_I = "I_" + String(n_k + 1) + "_" + String(n_k + 1);
    var_list.push(new_var_I);
    cond_matrix.push(Array(size).fill(0));
    for (var j = 0; j < size; j++) {
      cond_matrix[i][size] = 0;
    }
    curr_matrix.push(0);

    // cond_matrix = np.concatenate(
    //   (cond_matrix, np.zeros((1, cond_matrix.shape[0]))),
    //   (axis = 0)
    // );
    // cond_matrix = np.concatenate(
    //   (cond_matrix, np.zeros((cond_matrix.shape[0], 1))),
    //   (axis = 1)
    // );
    // curr_matrix = np.concatenate((curr_matrix, np.zeros((1, 1))), (axis = 0));

    var i_mn = var_list.index(
      "I_" + String(ctrl_n_m + 1) + "_" + String(ctrl_n_n + 1)
    );
    var i_kl = var_list.indexOf("I_" + String(n_k + 1) + "_" + String(n_l + 1));
    if (n_k != -1) {
      n_k = var_list.indexOf("V_" + String(n_k + 1));
    }
    if (n_l != -1) {
      n_l = var_list.indexOf("V_" + String(n_l + 1));
    }
    if (ctrl_n_m != -1) {
      ctrl_n_m = var_list.indexOf("V_" + String(ctrl_n_m + 1));
    }
    if (ctrl_n_n != -1) {
      ctrl_n_n = var_list.indexOf("V_" + String(ctrl_n_m + 1));
    }

    if (n_k != -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k != -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_n][i_mn] -= 1;
      cond_matrix[i_mn][ctrl_n_n] -= 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k == -1 && n_l != -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_l][i_kl] -= 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_kl][n_l] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m == -1 && ctrl_n_n != -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    } else if (n_k != -1 && n_l == -1 && ctrl_n_m != -1 && ctrl_n_n == -1) {
      cond_matrix[n_k][i_kl] += 1;
      cond_matrix[ctrl_n_m][i_mn] += 1;
      cond_matrix[i_mn][ctrl_n_m] += 1;
      cond_matrix[i_kl][n_k] += 1;
      cond_matrix[i_kl][i_mn] -= transresistance;
    }
  }

  cond_matrix_inv = math.inv(cond_matrix);
  output_matrix = math.multiply(cond_matrix_inv, curr_matrix);
  console.log(output_matrix);
  console.log("Success");
  var output = document.createElement("form");
  output.setAttribute("class", "output card card-body text-white bg-dark mb-3");

  var header = document.createElement("div");
  header.setAttribute("class", "card-header");
  header.innerHTML = "Output";
  output.appendChild(header);

  for (var i = 0; i < var_list.length; i++) {
    if (var_list[i][0] == "V") {
      console.log(var_list[i] + " = " + output_matrix[i][0].toFixed(2) + " V ");
      var matrix = document.createElement("h2");
      matrix.setAttribute("class", "card-text");
      matrix.innerHTML =
        var_list[i] + " = " + output_matrix[i][0].toFixed(2) + " V ";
      output.appendChild(matrix);
    }

    if (var_list[i][0] == "I") {
      var matrix = document.createElement("h2");
      matrix.innerHTML =
        var_list[i] + " = " + output_matrix[i][0].toFixed(2) + " A ";
      matrix.setAttribute("class", "card-text");

      output.appendChild(matrix);

      console.log(var_list[i] + " = " + output_matrix[i][0].toFixed(2) + " A");
    }
  }

  document.body.appendChild(output);

  window.scrollTo(0, document.body.scrollHeight);
}
