/**
 * Shared English / Nepali text for the Blood Pressure Log app.
 * Loaded by index.html, history.html, and progress.html.
 *
 * Usage in a page:
 *   <span data-i18n="save_btn">Save</span>          -> static text, translated automatically
 *   t('saved_ok').replace('{name}', selectedPerson)  -> dynamic text built in JS
 *   getLang()                                        -> 'en' or 'np', for date locale etc.
 *   window.onLangChange = function(){ ... }           -> called after the language switches,
 *                                                        so a page can re-render dynamic content
 */

const BP_TRANSLATIONS = {
  // shared nav
  nav_add: { en: 'Add Reading', np: 'रिडिङ थप्नुहोस्' },
  nav_history: { en: 'History', np: 'इतिहास' },
  nav_progress: { en: 'Progress', np: 'प्रगति' },
  eyebrow: { en: 'Home Health Log', np: 'घरको स्वास्थ्य लग' },
  footer_note: { en: 'Every reading goes straight into the family Google Sheet.', np: 'हरेक रिडिङ सिधै परिवारको गुगल सिटमा जान्छ।' },
  lang_toggle_to_np: { en: 'नेपाली', np: 'नेपाली' },
  lang_toggle_to_en: { en: 'English', np: 'English' },

  // index.html
  title_bp: { en: 'Blood Pressure', np: 'रक्तचाप' },
  who_label: { en: 'Who is this reading for?', np: 'यो रिडिङ कसको हो?' },
  ampm_label: { en: 'Morning or evening?', np: 'बिहान कि साँझ?' },
  am_btn: { en: '☀️ Morning (AM)', np: '☀️ बिहान' },
  pm_btn: { en: '🌙 Evening (PM)', np: '🌙 साँझ' },
  bp_card_label: { en: 'Blood pressure (optional)', np: 'रक्तचाप (वैकल्पिक)' },
  systolic_label: { en: 'Upper (Systolic)', np: 'माथिल्लो (सिस्टोलिक)' },
  diastolic_label: { en: 'Lower (Diastolic)', np: 'तल्लो (डायस्टोलिक)' },
  pulse_label: { en: 'Pulse (optional)', np: 'नाडी (वैकल्पिक)' },
  weight_card_label: { en: 'Weight (optional)', np: 'तौल (वैकल्पिक)' },
  weight_label: { en: 'Weight in kg', np: 'तौल (के.जी.)' },
  when_prefix: { en: "Saved with today's date & time:", np: 'आजको मिति र समयमा सेभ हुनेछ:' },
  save_btn: { en: 'Save', np: 'सेभ गर्नुहोस्' },
  saving_btn: { en: 'Saving...', np: 'सेभ हुँदैछ...' },
  err_choose_person: { en: 'Please choose Ramesh or Raje first.', np: 'कृपया पहिले रमेश वा राजे छान्नुहोस्।' },
  err_choose_tod: { en: 'Please choose Morning or Evening.', np: 'कृपया बिहान वा साँझ छान्नुहोस्।' },
  err_bp_both: { en: 'Please enter both upper and lower numbers, or leave both blank.', np: 'कृपया माथिल्लो र तल्लो दुवै नम्बर लेख्नुहोस्, वा दुवै खाली छोड्नुहोस्।' },
  err_need_one: { en: 'Please enter blood pressure, weight, or both.', np: 'कृपया रक्तचाप, तौल, वा दुवै लेख्नुहोस्।' },
  err_not_connected: { en: 'App not connected to Google Sheet yet.', np: 'एप अझै गुगल सिटसँग जोडिएको छैन।' },
  err_save_fail: { en: 'Could not save — check internet connection and try again.', np: 'सेभ हुन सकेन — इन्टरनेट जाँच गरेर फेरि प्रयास गर्नुहोस्।' },
  saved_ok: { en: '✅ Saved! Well done, {name}.', np: '✅ सेभ भयो! धन्यवाद, {name}।' },

  // history.html
  whose_history: { en: 'Whose history?', np: 'कसको इतिहास?' },
  which_month: { en: 'Which month?', np: 'कुन महिना?' },
  show_history_btn: { en: 'Show History', np: 'इतिहास देखाउनुहोस्' },
  loading_btn: { en: 'Loading...', np: 'लोड हुँदैछ...' },
  err_choose_month: { en: 'Please choose a month.', np: 'कृपया महिना छान्नुहोस्।' },
  err_load_fail: { en: 'Could not load history — check internet connection and try again.', np: 'इतिहास लोड हुन सकेन — इन्टरनेट जाँच गरेर फेरि प्रयास गर्नुहोस्।' },
  empty_history: { en: 'No readings saved for this person and month yet.', np: 'यो व्यक्ति र महिनाको लागि अझै कुनै रिडिङ छैन।' },
  fig_upper: { en: 'Upper', np: 'माथिल्लो' },
  fig_lower: { en: 'Lower', np: 'तल्लो' },
  fig_pulse: { en: 'Pulse', np: 'नाडी' },
  fig_weight: { en: 'Weight kg', np: 'तौल के.जी.' },
  avg_bp: { en: 'Avg Blood Pressure', np: 'औसत रक्तचाप' },
  avg_weight: { en: 'Avg Weight', np: 'औसत तौल' },
  readings_logged: { en: 'Readings Logged', np: 'रिडिङहरू लगियो' },
  edit_link: { en: 'Edit', np: 'सम्पादन' },
  editing_suffix: { en: '— editing', np: '— सम्पादन हुँदैछ' },
  cancel_btn: { en: 'Cancel', np: 'रद्द गर्नुहोस्' },
  err_edit_fail: { en: 'Could not save the edit — check internet connection and try again.', np: 'सम्पादन सेभ हुन सकेन — इन्टरनेट जाँच गरेर फेरि प्रयास गर्नुहोस्।' },

  // progress.html
  title_progress: { en: 'Progress Report', np: 'प्रगति प्रतिवेदन' },
  whose_progress: { en: 'Whose progress?', np: 'कसको प्रगति?' },
  loading_text: { en: 'Loading…', np: 'लोड हुँदैछ…' },
  err_load_progress: { en: 'Could not load progress — check internet connection and try again.', np: 'प्रगति लोड हुन सकेन — इन्टरनेट जाँच गरेर फेरि प्रयास गर्नुहोस्।' },
  no_readings_yet: { en: 'No readings logged yet for', np: 'अझै कुनै रिडिङ लगिएको छैन: ' },
  age_label: { en: 'Age', np: 'उमेर' },
  latest_bp_cap: { en: 'Latest Blood Pressure', np: 'पछिल्लो रक्तचाप' },
  latest_weight_cap: { en: 'Latest Weight', np: 'पछिल्लो तौल' },
  bmi_cap: { en: 'BMI', np: 'बीएमआई' },
  trend_steady: { en: 'Steady', np: 'स्थिर' },
  trend_up: { en: 'A bit higher than last time', np: 'अघिल्लोभन्दा अलि बढी' },
  trend_down: { en: 'A bit lower than last time', np: 'अघिल्लोभन्दा अलि कम' },
  remark_good: { en: 'Good — nice and steady', np: 'राम्रो — स्थिर छ' },
  remark_slightly_high: { en: 'Doing okay — a little on the high side', np: 'ठिकै छ — अलि उच्च छ' },
  remark_not_good: { en: 'Not so good — keep an eye on it', np: 'राम्रो छैन — ध्यान दिनुहोस्' },
  remark_very_high: { en: 'Quite high today — worth telling their doctor', np: 'आज एकदम उच्च छ — डाक्टरलाई भन्नु राम्रो हुन्छ' },
  bmi_underweight: { en: 'On the lighter side', np: 'अलि हलुका' },
  bmi_good: { en: 'Good — healthy range', np: 'राम्रो — स्वस्थ दायरा' },
  bmi_high_ok: { en: 'Doing okay — a little above range', np: 'ठिकै छ — अलि बढी' },
  bmi_not_good: { en: 'Not so good — above healthy range', np: 'राम्रो छैन — दायराभन्दा माथि' },
  footnote_progress: { en: 'These are general reference ranges to help you keep an eye on things, not a medical diagnosis.', np: 'यी सामान्य सन्दर्भ दायराहरू मात्र हुन्, चिकित्सकीय निदान होइन।' },
  chart_bp_title: { en: 'Blood Pressure Trend', np: 'रक्तचाप प्रवृत्ति' },
  chart_weight_title: { en: 'Weight Trend', np: 'तौल प्रवृत्ति' }
};

let _bpLang = localStorage.getItem('bpLang') || 'en';

function getLang(){
  return _bpLang;
}

function t(key){
  const entry = BP_TRANSLATIONS[key];
  if (!entry) return key;
  return entry[_bpLang] || entry.en;
}

function applyStaticTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  const slider = document.getElementById('langSlider');
  if (slider) {
    slider.style.transform = _bpLang === 'np' ? 'translateX(70px)' : 'translateX(0)';
  }
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === _bpLang);
  });
}

function setLang(lang){
  if (lang !== 'en' && lang !== 'np') return;
  _bpLang = lang;
  localStorage.setItem('bpLang', _bpLang);
  applyStaticTranslations();
  if (typeof window.onLangChange === 'function') window.onLangChange();
}

document.addEventListener('DOMContentLoaded', applyStaticTranslations);
