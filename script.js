document.addEventListener('DOMContentLoaded', () => {

    const wisdomData = [
        { title: '境界总述', description: '能掌控天地阴阳规律，达到天人合一，与道共生。', details: ['“余闻上古有真人者，提挈天地，把握阴阳”', '“呼吸精气，独立守神，肌肉若一”', '“故能寿敝天地，无有终时”', '“此其道生”'] },
        { title: '养生特征', description: '顺应四时，超脱世俗，感知能力远超常人。', details: ['“淳德全道，和于阴阳”', '“调于四时，去世离俗”', '“积精全神，游行天地之间”', '“视听八达之外”', '“肌肤若冰雪，绰约若处子”', '“不食五谷，吸风饮露”'] },
        { title: '与天道的关系', description: '完全与天道相合，深谙阴阳法则，与天地同步共振。', details: ['“与道合同，惟真人也”', '“知道者，法于阴阳”', '“通神明之德，类万物之情”', '“把握阴阳，呼吸精气”', '“与天地如一”'] },
        { title: '修行方法', description: '通过专注守神，精神内敛，心境清净以运行真气。', details: ['“独立守神，肌肉若一”', '“精神内守，病安从来”', '“恬惔虚无，真气从之”', '“去世离俗，积精全神”', '“呼吸精气，吐故纳新”'] },
        { title: '生理表现', description: '形神同步，百岁仍动作不衰，五脏坚固，气血和调。', details: ['“形与神俱，而尽终其天年”', '“肌肉若一，故能寿敝天地”', '对比普通人：“发鬓白，身体重，行步不正”', '“春秋皆度百岁而动作不衰”', '“五脏坚固，血脉和调”'] },
        { title: '智慧境界', description: '智慧通达无穷，具有独到的洞察力，明朗如风吹云。', details: ['“通于无穷，究于无极”', '“慧然独悟，俱视独见”', '“昭然独明，若风吹云”', '“能经天地阴阳之化”', '“知万物者，谓之天子”'] },
        { title: '生命状态', description: '身体劳作而不疲倦，欲望合理，对简单事物感到满足。', details: ['“形劳而不倦”', '“气从以顺，各从其欲”', '“皆得所愿，故美其食”', '“任其服，乐其俗”', '“高下不相慕，其民故曰朴”'] },
        { title: '社会功能', description: '以无为之道引导民众，在虚无中获得真正自由。', details: ['“教化百姓，使民不倦”', '“为无为之事，乐恬惔之能”', '“从欲快志于虚无之守”', '“游行天地之间，视听八达之外”', '“此盖益其寿命而强者也”'] }
    ];

    const wisdomCardsContainer = document.getElementById('wisdom-cards');
    wisdomData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card bg-white p-6 rounded-lg shadow-sm cursor-pointer';
        card.innerHTML = `
            <h3 class="text-xl font-bold text-[#8D8741] mb-2">${item.title}</h3>
            <p class="text-gray-600">${item.description}</p>
        `;
        card.addEventListener('click', () => {
             alert(`【${item.title}】\n\n${item.details.join('\n')}`);
        });
        wisdomCardsContainer.appendChild(card);
    });

    const comparisonData = {
        labels: ['掌控自然', '顺应自然', '德行圆满', '心境平和', '效法学习', '世俗参与度'],
        datasets: [
            { name: '真人', data: [5, 5, 5, 5, 5, 1], color: 'rgba(101, 157, 189, 0.8)', description: '<strong>真人：与道合一</strong><br>核心能力：掌控阴阳，与道合一。<br>与自然的关系：超越自然。<br>养生关键：先天本能（呼吸、守神）。<br>世俗参与度：超脱世俗。' },
            { name: '至人', data: [4, 5, 5, 4, 4, 2], color: 'rgba(131, 175, 155, 0.8)', description: '<strong>至人：淳德全道</strong><br>核心能力：淳德全道，积精全神。<br>与自然的关系：顺应并运用自然。<br>养生关键：主动修行（离俗修心）。<br>世俗参与度：部分远离。' },
            { name: '圣人', data: [3, 4, 4, 5, 3, 4], color: 'rgba(166, 160, 132, 0.8)', description: '<strong>圣人：处世之和</strong><br>核心能力：调和世俗，心态平和。<br>与自然的关系：适应自然。<br>养生关键：日常节制（形劳不倦）。<br>世俗参与度：深度参与。' },
            { name: '贤人', data: [2, 3, 3, 3, 5, 5], color: 'rgba(218, 156, 132, 0.8)', description: '<strong>贤人：法则天地</strong><br>核心能力：效法天地，模仿规律。<br>与自然的关系：依赖自然法则。<br>养生关键：后天学习（法则天地）。<br>世俗参与度：积极学习。' }
        ]
    };

    const ctx = document.getElementById('comparisonChart').getContext('2d');
    const comparisonChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: comparisonData.labels,
            datasets: []
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(0,0,0,0.1)' },
                    grid: { color: 'rgba(0,0,0,0.1)' },
                    pointLabels: { font: { size: 12 }, color: '#5a5a5a' },
                    ticks: {
                        backdropColor: 'transparent',
                        stepSize: 1,
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 5
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.r !== null) {
                                label += context.parsed.r;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    const comparisonButtonsContainer = document.getElementById('comparison-buttons');
    const comparisonTextContainer = document.getElementById('comparison-text');

    comparisonData.datasets.forEach(dataset => {
        const button = document.createElement('button');
        button.textContent = dataset.name;
        button.className = 'px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition-colors';
        button.addEventListener('click', () => {
            updateComparisonChart(dataset.name);
            document.querySelectorAll('#comparison-buttons button').forEach(btn => btn.classList.remove('bg-[#A6A084]', 'text-white'));
            button.classList.add('bg-[#A6A084]', 'text-white');
        });
        comparisonButtonsContainer.appendChild(button);
    });

    function updateComparisonChart(name) {
        const selectedDataset = comparisonData.datasets.find(d => d.name === name);
        if (selectedDataset) {
            comparisonChart.data.datasets = [{
                label: selectedDataset.name,
                data: selectedDataset.data,
                backgroundColor: selectedDataset.color.replace('0.8', '0.2'),
                borderColor: selectedDataset.color,
                pointBackgroundColor: selectedDataset.color,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: selectedDataset.color
            }];
            comparisonChart.update();
            comparisonTextContainer.innerHTML = selectedDataset.description;
        }
    }

    updateComparisonChart('真人'); // Default selection
    document.querySelector('#comparison-buttons button').classList.add('bg-[#A6A084]', 'text-white'); // Highlight default button

    const planData = [
        {
            stage: "第一阶段：基础奠定 (1-4周)",
            content: {
                "饮食": "<h3>目标：减少加工食品，增加天然食物</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>每日至少一餐在家烹饪，戒掉含糖饮料，多喝温水。</li><li>尝试“细嚼慢咽”，每餐至少20分钟。</li><li>引入季节性食物，饭后散步10-15分钟。</li></ul>",
                "睡眠": "<h3>目标：建立固定作息，提升睡眠质量</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>设定固定睡眠与起床时间，周末也尽量保持。</li><li>睡前1小时关闭电子屏幕。</li><li>确保卧室黑暗、安静、凉爽，睡前可进行5分钟腹式呼吸。</li></ul>",
                "锻炼": "<h3>目标：培养每日运动习惯，感受身体</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>每日至少30-45分钟户外散步。</li><li>学习八段锦前两式，每日练习5-15分钟，注重动作与呼吸的配合。</li></ul>",
                "为人处世": "<h3>目标：培养感恩之心，观察自我情绪</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>每日睡前写下3件值得感恩的事。</li><li>练习“积极倾听”，不打断对方。</li><li>当产生负面情绪时，暂停3秒，觉察其来源，不立即反应。</li></ul>",
            }
        },
        {
            stage: "第二阶段：心性深化 (5-8周)",
            content: {
                "饮食": "<h3>目标：实践“少私寡欲”，培养知足</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>尝试每周选择一天晚餐清淡，或“过午不食”。</li><li>避免过度追求口味刺激。</li><li>有意识培养对简单、天然食物的满足感。</li></ul>",
                "睡眠": "<h3>目标：促进深度睡眠，感受自然节律</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>睡前进行10-15分钟的静坐冥想。</li><li>尝试周末不设闹钟，让身体自然醒来。</li></ul>",
                "锻炼": "<h3>目标：深入气功练习，探索“动中求静”</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>每日八段锦练习20-30分钟，注重意念引导。</li><li>学习太极拳基本招式，每日练习15-20分钟，感受内在平静。</li></ul>",
                "为人处世": "<h3>目标：练习宽容与放下，实践“无为”</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>尝试原谅曾经让你不快的人或事。</li><li>减少攀比心，培养“知足常乐”。</li><li>在非关键场合，尝试“顺其自然”的处世方式。</li></ul>",
            }
        },
        {
            stage: "第三阶段：形神合一 (9-12周)",
            content: {
                "饮食": "<h3>目标：达到“任其服，乐其俗”</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>培养饮食的直觉，根据身体真实需求进食。</li><li>在专业指导下可尝试一次短期轻断食，感受身体净化。</li></ul>",
                "睡眠": "<h3>目标：提升“精神内守”</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>每日睡前进行20分钟深度冥想，排除杂念。</li><li>持续保持规律作息，感受醒来时的充沛精力。</li></ul>",
                "锻炼": "<h3>目标：达到“形劳而不倦，气从以顺”</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>每日坚持太极拳或八段锦30分钟，感受身体韧性。</li><li>深入练习，感受气血运行顺畅，与自然能量共振。</li></ul>",
                "为人处世": "<h3>目标：积极利他，实践“出世入世”</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>主动寻找机会帮助他人，培养宽广胸怀。</li><li>在积极参与社会生活的同时，保持内心自由，不为得失所困。</li></ul>",
            }
        },
        {
            stage: "第四阶段：持续精进 (13-14周)", // Corrected week range
            content: {
                "饮食": "<h3>目标：形成个性化饮食模式</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>持续保持清淡、均衡、适时、适量的饮食习惯，并学会灵活调整。</li></ul>",
                "睡眠": "<h3>目标：达到最佳睡眠状态</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>让睡眠成为自然而然的恢复过程，在任何环境下都能快速进入平静。</li></ul>",
                "锻炼": "<h3>目标：形成综合锻炼体系</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>巩固所学功法，融入日常，保持与自然的连接。</li></ul>",
                "为人处世": "<h3>目标：深化道德修养</h3><ul class='list-disc list-inside mt-2 text-gray-600 space-y-1'><li>将“淳德全道”作为终身追求，以“和”为贵，促进和谐共处。</li></ul>",
            }
        }
    ];

    const stageButtonsContainer = document.getElementById('stage-buttons');
    const stageContentContainer = document.getElementById('stage-content');

    planData.forEach((stageData, index) => {
        const button = document.createElement('button');
        button.textContent = stageData.stage;
        button.className = 'stage-btn px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-600 transition-colors duration-300';
        button.dataset.index = index; // Store index for easy lookup
        stageButtonsContainer.appendChild(button);
    });

    stageButtonsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.stage-btn')) {
            const index = e.target.dataset.index;
            // Update active button
            document.querySelectorAll('.stage-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            // Render content
            renderStageContent(index);
        }
    });

    function renderStageContent(index) {
        const stageData = planData[index];
        const tabs = Object.keys(stageData.content);
        let tabHtml = '<div class="flex border-b mb-4">';
        tabs.forEach((tab, i) => {
            tabHtml += `<button class="tab px-4 py-2 -mb-px ${i === 0 ? 'active' : ''}" data-tab="${tab}">${tab}</button>`;
        });
        tabHtml += '</div>';

        let contentHtml = '';
        tabs.forEach((tab, i) => {
            // Display first tab's content by default, hide others
            contentHtml += `<div id="tab-content-${tab}" class="${i > 0 ? 'hidden' : ''}">${stageData.content[tab]}</div>`;
        });

        stageContentContainer.innerHTML = tabHtml + contentHtml;
    }

    // Tab click listener within stage content
    stageContentContainer.addEventListener('click', (e) => {
        if (e.target.matches('.tab')) {
            const tabName = e.target.dataset.tab;
            // Update active tab
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');

            // Show selected tab's content, hide others
            document.querySelectorAll('[id^="tab-content-"]').forEach(c => c.classList.add('hidden'));
            document.getElementById(`tab-content-${tabName}`).classList.remove('hidden');
        }
    });

    // Initial render for the first stage and its first tab
    document.querySelector('.stage-btn').classList.add('active'); // Activate first stage button
    renderStageContent(0); // Render first stage content

    const modernWisdomData = [
        { icon: '☯️', title: '形神兼养', text: '提示现代人要注重形体与精神的共同养护，实现身心和谐统一。' },
        { icon: '❤️', title: '精神内守', text: '心理健康是预防疾病的关键，内心的平静是健康的基础。' },
        { icon: '🌬️', title: '呼吸精气', text: '呼吸的调节对身心健康至关重要，是连接内外能量的桥梁。' },
        { icon: '🧘', title: '恬淡虚无', text: '清静平和的心态，有利于体内正气的顺畅运行，是养生的至高法门。' },
        { icon: '🌿', title: '淳德全道', text: '道德修养与顺应自然规律是内在统一的，高尚的品德本身就是一种养生。' },
        { icon: '🌍', title: '回归自然', text: '顺应四时节律，选择自然饮食，在快节奏的现代生活中回归生命的本源。' }
    ];

    const modernWisdomContainer = document.getElementById('modern-wisdom-content');
    modernWisdomData.forEach(item => {
        const wisdomItem = document.createElement('div');
        wisdomItem.className = 'bg-white p-6 rounded-lg shadow-sm text-center';
        wisdomItem.innerHTML = `
            <div class="text-4xl mb-4">${item.icon}</div>
            <h3 class="text-xl font-bold text-[#8D8741] mb-2">${item.title}</h3>
            <p class="text-gray-600">${item.text}</p>
        `;
        modernWisdomContainer.appendChild(wisdomItem);
    });

    // Navigation
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link'); // For desktop nav
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a'); // For mobile nav
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    function changeSection(hash) {
        if (!hash || hash === '#') hash = '#home'; // Default to home

        sections.forEach(section => {
            if ('#' + section.id === hash) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Update active state for both desktop and mobile nav links
        [...navLinks, ...mobileNavLinks].forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // For mobile, ensure the menu closes after navigation
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        window.scrollTo(0, 0); // Scroll to top on section change
    }

    // Event listeners for all navigation links (desktop and mobile)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const hash = this.getAttribute('href');
            history.pushState(null, null, hash); // Update URL hash
            changeSection(hash);
        });
    });

    // Handle browser back/forward navigation
    window.addEventListener('popstate', () => {
        changeSection(window.location.hash);
    });

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Initial section load based on URL hash or default to #home
    changeSection(window.location.hash);
});
