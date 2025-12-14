// ===== Tool Definitions =====
const tools = [
  {
    id: "merge",
    name: "Merge PDF",
    description: "Combine multiple PDFs into one document",
    icon: "merge",
    color: "#e5322d",
    accept: ".pdf",
    multiple: true,
  },
  {
    id: "split",
    name: "Split PDF",
    description: "Separate one PDF into multiple files",
    icon: "split",
    color: "#f59e0b",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "compress",
    name: "Compress PDF",
    description: "Reduce file size while keeping quality",
    icon: "compress",
    color: "#22c55e",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "pdf-to-jpg",
    name: "PDF to JPG",
    description: "Convert PDF pages to JPG images",
    icon: "image",
    color: "#3b82f6",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "jpg-to-pdf",
    name: "JPG to PDF",
    description: "Convert JPG images to PDF document",
    icon: "file",
    color: "#8b5cf6",
    accept: ".jpg,.jpeg,.png",
    multiple: true,
  },
  {
    id: "pdf-to-png",
    name: "PDF to PNG",
    description: "Convert PDF pages to PNG images",
    icon: "image",
    color: "#06b6d4",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "png-to-pdf",
    name: "PNG to PDF",
    description: "Convert PNG images to PDF document",
    icon: "file",
    color: "#ec4899",
    accept: ".png",
    multiple: true,
  },
  {
    id: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert Word documents to PDF",
    icon: "file-text",
    color: "#2563eb",
    accept: ".doc,.docx",
    multiple: false,
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF to editable Word document",
    icon: "file-text",
    color: "#7c3aed",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "rotate",
    name: "Rotate PDF",
    description: "Rotate PDF pages to any angle",
    icon: "rotate",
    color: "#f97316",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "add-page-numbers",
    name: "Add Page Numbers",
    description: "Add page numbers to your PDF",
    icon: "hash",
    color: "#14b8a6",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "add-watermark",
    name: "Add Watermark",
    description: "Add text watermark to PDF pages",
    icon: "droplet",
    color: "#6366f1",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "unlock",
    name: "Unlock PDF",
    description: "Remove password from protected PDF",
    icon: "unlock",
    color: "#10b981",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "protect",
    name: "Protect PDF",
    description: "Add password protection to PDF",
    icon: "lock",
    color: "#ef4444",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "extract-pages",
    name: "Extract Pages",
    description: "Extract specific pages from PDF",
    icon: "scissors",
    color: "#0ea5e9",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "delete-pages",
    name: "Delete Pages",
    description: "Remove unwanted pages from PDF",
    icon: "trash",
    color: "#dc2626",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "reorder-pages",
    name: "Reorder Pages",
    description: "Rearrange pages in your PDF",
    icon: "list",
    color: "#8b5cf6",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "crop-pdf",
    name: "Crop PDF",
    description: "Crop and resize PDF pages",
    icon: "crop",
    color: "#f43f5e",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "grayscale",
    name: "PDF to Grayscale",
    description: "Convert PDF to black and white",
    icon: "contrast",
    color: "#64748b",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "flatten",
    name: "Flatten PDF",
    description: "Flatten form fields and annotations",
    icon: "layers",
    color: "#a855f7",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "repair",
    name: "Repair PDF",
    description: "Fix and repair corrupted PDFs",
    icon: "wrench",
    color: "#059669",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "ocr",
    name: "OCR PDF",
    description: "Make scanned PDFs searchable",
    icon: "scan",
    color: "#0891b2",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "sign-pdf",
    name: "Sign PDF",
    description: "Add digital signature to PDF",
    icon: "pen",
    color: "#d946ef",
    accept: ".pdf",
    multiple: false,
  },
  {
    id: "compare",
    name: "Compare PDF",
    description: "Compare two PDF documents",
    icon: "git-compare",
    color: "#f59e0b",
    accept: ".pdf",
    multiple: true,
  },
  {
    id: "html-to-pdf",
    name: "HTML to PDF",
    description: "Convert HTML/URL to PDF",
    icon: "globe",
    color: "#0ea5e9",
    accept: ".html",
    multiple: false,
  },
  {
    id: "excel-to-pdf",
    name: "Excel to PDF",
    description: "Convert Excel to PDF document",
    icon: "table",
    color: "#16a34a",
    accept: ".xls,.xlsx",
    multiple: false,
  },
  {
    id: "pdf-to-excel",
    name: "PDF to Excel",
    description: "Convert PDF tables to Excel",
    icon: "table",
    color: "#15803d",
    accept: ".pdf",
    multiple: false,
  },
]

// ===== Icon SVGs =====
const icons = {
  merge:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  split:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="3" x2="12" y2="21"/><polyline points="8 8 4 12 8 16"/><polyline points="16 16 20 12 16 8"/></svg>',
  compress:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9.2 22 3-7 3 7"/><path d="M9.2 22h6"/></svg>',
  image:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  file: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  "file-text":
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="21"/></svg>',
  rotate:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>',
  hash: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
  droplet:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  unlock:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',
  lock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  scissors:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
  trash:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  list: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  crop: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/></svg>',
  contrast:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20z"/></svg>',
  layers:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  wrench:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  scan: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>',
  pen: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  "git-compare":
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>',
  globe:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  table:
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
  arrow:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
}

// ===== State =====
let currentTool = null
let uploadedFiles = []
let processedBlob = null

// ===== DOM Elements =====
const toolsGrid = document.getElementById("toolsGrid")
const toolSearch = document.getElementById("toolSearch")
const modalOverlay = document.getElementById("modalOverlay")
const modalIcon = document.getElementById("modalIcon")
const modalTitle = document.getElementById("modalTitle")
const modalDescription = document.getElementById("modalDescription")
const modalClose = document.getElementById("modalClose")
const uploadArea = document.getElementById("uploadArea")
const fileInput = document.getElementById("fileInput")
const fileList = document.getElementById("fileList")
const toolOptions = document.getElementById("toolOptions")
const progressContainer = document.getElementById("progressContainer")
const progressFill = document.getElementById("progressFill")
const progressText = document.getElementById("progressText")
const resultArea = document.getElementById("resultArea")
const processBtn = document.getElementById("processBtn")
const resetBtn = document.getElementById("resetBtn")
const downloadBtn = document.getElementById("downloadBtn")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

// ===== Libraries =====
const PDFLib = window.PDFLib
const JSZip = window.JSZip
const pdfjsLib = window.pdfjsLib

// ===== Initialize =====
function init() {
  renderTools(tools)
  setupEventListeners()
}

// ===== Render Tools Grid =====
function renderTools(toolList) {
  toolsGrid.innerHTML = toolList
    .map(
      (tool, index) => `
        <div class="tool-card" onclick="openTool('${tool.id}')" style="animation-delay: ${index * 0.05}s">
            <div class="tool-card-header">
                <div class="tool-icon" style="background: ${tool.color}20; color: ${tool.color}">
                    ${icons[tool.icon]}
                </div>
                <div class="tool-card-content">
                    <h3 class="tool-name">${tool.name}</h3>
                    <p class="tool-description">${tool.description}</p>
                </div>
            </div>
            <div class="tool-arrow">${icons.arrow}</div>
        </div>
    `,
    )
    .join("")
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
  // Search
  toolSearch.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase()
    const filtered = tools.filter(
      (tool) => tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query),
    )
    renderTools(filtered)
  })

  // Mobile menu
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
  })

  // Close mobile menu on link click
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  })

  // Modal close
  modalClose.addEventListener("click", closeModal)
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal()
  })

  // Upload area
  uploadArea.addEventListener("click", () => fileInput.click())
  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    uploadArea.classList.add("dragover")
  })
  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover")
  })
  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    uploadArea.classList.remove("dragover")
    handleFiles(e.dataTransfer.files)
  })
  fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files)
  })

  // Buttons
  processBtn.addEventListener("click", processFiles)
  resetBtn.addEventListener("click", resetTool)
  downloadBtn.addEventListener("click", downloadResult)

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal()
  })
}

// ===== Open Tool Modal =====
function openTool(toolId) {
  currentTool = tools.find((t) => t.id === toolId)
  if (!currentTool) return

  modalIcon.innerHTML = icons[currentTool.icon]
  modalIcon.style.background = `${currentTool.color}20`
  modalIcon.style.color = currentTool.color
  modalTitle.textContent = currentTool.name
  modalDescription.textContent = currentTool.description

  fileInput.accept = currentTool.accept
  fileInput.multiple = currentTool.multiple

  renderToolOptions()
  resetTool()

  modalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

// ===== Close Modal =====
function closeModal() {
  modalOverlay.classList.remove("active")
  document.body.style.overflow = ""
  currentTool = null
  resetTool()
}

// ===== Render Tool Options =====
function renderToolOptions() {
  let optionsHTML = ""

  switch (currentTool.id) {
    case "compress":
      optionsHTML = `
                <div class="option-group">
                    <label class="option-label">Compression Level</label>
                    <input type="range" class="option-range" id="quality" min="10" max="100" value="70">
                    <p class="option-value">Quality: <span id="qualityValue">70</span>%</p>
                </div>
            `
      break
    case "rotate":
      optionsHTML = `
                <div class="option-group">
                    <label class="option-label">Rotation Angle</label>
                    <select class="option-select" id="rotateAngle">
                        <option value="90">90° Clockwise</option>
                        <option value="180">180°</option>
                        <option value="270">90° Counter-clockwise</option>
                    </select>
                </div>
            `
      break
    case "split":
    case "extract-pages":
      optionsHTML = `
                <div class="option-group">
                    <label class="option-label">Page Range (e.g., 1-3, 5, 7-9)</label>
                    <input type="text" class="option-input" id="pageRange" placeholder="1-3, 5, 7-9">
                </div>
            `
      break
    case "delete-pages":
      optionsHTML = `
                <div class="option-group">
                    <label class="option-label">Pages to Delete (e.g., 1, 3, 5-7)</label>
                    <input type="text" class="option-input" id="deletePages" placeholder="1, 3, 5-7">
                </div>
            `
      break
    case "add-watermark":
      optionsHTML = `
                <div class="option-group">
                    <label class="option-label">Watermark Text</label>
                    <input type="text" class="option-input" id="watermarkText" placeholder="CONFIDENTIAL">
                </div>
                <div class="option-group">
                    <label class="option-label">Opacity</label>
                    <input type="range" class="option-range" id="watermarkOpacity" min="10" max="100" value="30">
                    <p class="option-value">Opacity: <span id="opacityValue">30</span>%</p>
                </div>
            `
      break
    case "protect":
      optionsHTML = `
                <div class="option-group">
                    <label class="option-label">Password</label>
                    <input type="password" class="option-input" id="pdfPassword" placeholder="Enter password">
                </div>
            `
      break
    case "unlock":
      optionsHTML = `
                <div class="option-group">
                    <label class="option-label">Current Password</label>
                    <input type="password" class="option-input" id="currentPassword" placeholder="Enter current password">
                </div>
            `
      break
    case "add-page-numbers":
      optionsHTML = `
                <div class="option-group">
                    <label class="option-label">Position</label>
                    <select class="option-select" id="pageNumberPosition">
                        <option value="bottom-center">Bottom Center</option>
                        <option value="bottom-right">Bottom Right</option>
                        <option value="bottom-left">Bottom Left</option>
                        <option value="top-center">Top Center</option>
                        <option value="top-right">Top Right</option>
                        <option value="top-left">Top Left</option>
                    </select>
                </div>
            `
      break
  }

  toolOptions.innerHTML = optionsHTML

  if (optionsHTML) {
    toolOptions.classList.add("active")

    // Setup range sliders
    const qualitySlider = document.getElementById("quality")
    const qualityValue = document.getElementById("qualityValue")
    if (qualitySlider && qualityValue) {
      qualitySlider.addEventListener("input", () => {
        qualityValue.textContent = qualitySlider.value
      })
    }

    const opacitySlider = document.getElementById("watermarkOpacity")
    const opacityValue = document.getElementById("opacityValue")
    if (opacitySlider && opacityValue) {
      opacitySlider.addEventListener("input", () => {
        opacityValue.textContent = opacitySlider.value
      })
    }
  } else {
    toolOptions.classList.remove("active")
  }
}

// ===== Handle Files =====
function handleFiles(files) {
  uploadedFiles = Array.from(files)
  renderFileList()
  updateProcessButton()
}

// ===== Render File List =====
function renderFileList() {
  fileList.innerHTML = uploadedFiles
    .map(
      (file, index) => `
        <div class="file-item">
            <div class="file-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
            </div>
            <div class="file-info">
                <p class="file-name">${file.name}</p>
                <p class="file-size">${formatFileSize(file.size)}</p>
            </div>
            <button class="file-remove" onclick="removeFile(${index})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    `,
    )
    .join("")
}

// ===== Remove File =====
function removeFile(index) {
  uploadedFiles.splice(index, 1)
  renderFileList()
  updateProcessButton()
}

// ===== Update Process Button =====
function updateProcessButton() {
  const minFiles = currentTool?.multiple ? 1 : 1
  processBtn.disabled = uploadedFiles.length < minFiles
}

// ===== Format File Size =====
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

// ===== Process Files =====
async function processFiles() {
  if (!currentTool || uploadedFiles.length === 0) return

  showProgress()
  updateProgress(10, "Starting...")

  try {
    switch (currentTool.id) {
      case "merge":
        await mergePDFs()
        break
      case "split":
        await splitPDF()
        break
      case "compress":
        await compressPDF()
        break
      case "rotate":
        await rotatePDF()
        break
      case "pdf-to-jpg":
      case "pdf-to-png":
        await convertPDFToImages()
        break
      case "jpg-to-pdf":
      case "png-to-pdf":
        await convertImagesToPDF()
        break
      case "add-watermark":
        await addWatermark()
        break
      case "add-page-numbers":
        await addPageNumbers()
        break
      case "extract-pages":
        await extractPages()
        break
      case "delete-pages":
        await deletePages()
        break
      case "protect":
        await protectPDF()
        break
      case "grayscale":
        await convertToGrayscale()
        break
      default:
        await genericPDFProcess()
    }

    updateProgress(100, "Complete!")
    setTimeout(showResult, 500)
  } catch (error) {
    console.error("Processing error:", error)
    alert("Error processing file: " + error.message)
    resetTool()
  }
}

// ===== PDF Processing Functions =====
async function mergePDFs() {
  updateProgress(20, "Reading files...")
  const { PDFDocument } = PDFLib
  const mergedPdf = await PDFDocument.create()

  for (let i = 0; i < uploadedFiles.length; i++) {
    updateProgress(20 + (60 * i) / uploadedFiles.length, `Merging file ${i + 1}/${uploadedFiles.length}...`)
    const bytes = await uploadedFiles[i].arrayBuffer()
    const pdf = await PDFDocument.load(bytes)
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
    pages.forEach((page) => mergedPdf.addPage(page))
  }

  updateProgress(90, "Saving...")
  const pdfBytes = await mergedPdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function splitPDF() {
  const { PDFDocument } = PDFLib
  const pageRange = document.getElementById("pageRange")?.value || "1"
  const ranges = parsePageRange(pageRange)

  updateProgress(20, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)

  const zip = new JSZip()

  for (let i = 0; i < ranges.length; i++) {
    updateProgress(20 + (60 * i) / ranges.length, `Creating part ${i + 1}...`)
    const newPdf = await PDFDocument.create()
    const pages = await newPdf.copyPages(
      pdf,
      ranges[i].map((p) => p - 1),
    )
    pages.forEach((page) => newPdf.addPage(page))
    const pdfBytes = await newPdf.save()
    zip.file(`split_${i + 1}.pdf`, pdfBytes)
  }

  updateProgress(90, "Creating ZIP...")
  const zipBlob = await zip.generateAsync({ type: "blob" })
  processedBlob = zipBlob
}

async function compressPDF() {
  const { PDFDocument } = PDFLib
  updateProgress(30, "Reading PDF...")

  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)

  updateProgress(70, "Compressing...")
  const pdfBytes = await pdf.save({ useObjectStreams: true })

  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function rotatePDF() {
  const { PDFDocument, degrees } = PDFLib
  const angle = Number.parseInt(document.getElementById("rotateAngle")?.value || "90")

  updateProgress(30, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)

  updateProgress(60, "Rotating pages...")
  const pages = pdf.getPages()
  pages.forEach((page) => {
    page.setRotation(degrees(page.getRotation().angle + angle))
  })

  updateProgress(90, "Saving...")
  const pdfBytes = await pdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function convertPDFToImages() {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"

  updateProgress(20, "Loading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await pdfjsLib.getDocument(bytes).promise

  const zip = new JSZip()
  const format = currentTool.id === "pdf-to-jpg" ? "jpeg" : "png"

  for (let i = 1; i <= pdf.numPages; i++) {
    updateProgress(20 + (60 * i) / pdf.numPages, `Converting page ${i}/${pdf.numPages}...`)

    const page = await pdf.getPage(i)
    const scale = 2
    const viewport = page.getViewport({ scale })

    const canvas = document.createElement("canvas")
    canvas.width = viewport.width
    canvas.height = viewport.height
    const ctx = canvas.getContext("2d")

    await page.render({ canvasContext: ctx, viewport }).promise

    const dataUrl = canvas.toDataURL(`image/${format}`, 0.9)
    const base64 = dataUrl.split(",")[1]
    zip.file(`page_${i}.${format === "jpeg" ? "jpg" : "png"}`, base64, { base64: true })
  }

  updateProgress(90, "Creating ZIP...")
  processedBlob = await zip.generateAsync({ type: "blob" })
}

async function convertImagesToPDF() {
  const { PDFDocument } = PDFLib
  const pdf = await PDFDocument.create()

  for (let i = 0; i < uploadedFiles.length; i++) {
    updateProgress(20 + (60 * i) / uploadedFiles.length, `Adding image ${i + 1}/${uploadedFiles.length}...`)

    const bytes = await uploadedFiles[i].arrayBuffer()
    let image

    if (uploadedFiles[i].type === "image/png") {
      image = await pdf.embedPng(bytes)
    } else {
      image = await pdf.embedJpg(bytes)
    }

    const page = pdf.addPage([image.width, image.height])
    page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height })
  }

  updateProgress(90, "Saving PDF...")
  const pdfBytes = await pdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function addWatermark() {
  const { PDFDocument, rgb, StandardFonts } = PDFLib
  const text = document.getElementById("watermarkText")?.value || "WATERMARK"
  const opacity = (Number.parseInt(document.getElementById("watermarkOpacity")?.value) || 30) / 100

  updateProgress(30, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)
  const font = await pdf.embedFont(StandardFonts.HelveticaBold)

  updateProgress(60, "Adding watermark...")
  const pages = pdf.getPages()
  pages.forEach((page) => {
    const { width, height } = page.getSize()
    page.drawText(text, {
      x: width / 2 - text.length * 15,
      y: height / 2,
      size: 60,
      font,
      color: rgb(0.5, 0.5, 0.5),
      opacity,
      rotate: { type: "degrees", angle: -45 },
    })
  })

  updateProgress(90, "Saving...")
  const pdfBytes = await pdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function addPageNumbers() {
  const { PDFDocument, rgb, StandardFonts } = PDFLib
  const position = document.getElementById("pageNumberPosition")?.value || "bottom-center"

  updateProgress(30, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)
  const font = await pdf.embedFont(StandardFonts.Helvetica)

  updateProgress(60, "Adding page numbers...")
  const pages = pdf.getPages()
  pages.forEach((page, index) => {
    const { width, height } = page.getSize()
    const text = `${index + 1}`
    let x, y

    switch (position) {
      case "bottom-center":
        x = width / 2
        y = 30
        break
      case "bottom-right":
        x = width - 50
        y = 30
        break
      case "bottom-left":
        x = 50
        y = 30
        break
      case "top-center":
        x = width / 2
        y = height - 30
        break
      case "top-right":
        x = width - 50
        y = height - 30
        break
      case "top-left":
        x = 50
        y = height - 30
        break
      default:
        x = width / 2
        y = 30
    }

    page.drawText(text, { x, y, size: 12, font, color: rgb(0, 0, 0) })
  })

  updateProgress(90, "Saving...")
  const pdfBytes = await pdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function extractPages() {
  const { PDFDocument } = PDFLib
  const pageRange = document.getElementById("pageRange")?.value || "1"
  const pageNumbers = parsePageRange(pageRange).flat()

  updateProgress(30, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)
  const newPdf = await PDFDocument.create()

  updateProgress(60, "Extracting pages...")
  const pages = await newPdf.copyPages(
    pdf,
    pageNumbers.map((p) => p - 1),
  )
  pages.forEach((page) => newPdf.addPage(page))

  updateProgress(90, "Saving...")
  const pdfBytes = await newPdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function deletePages() {
  const { PDFDocument } = PDFLib
  const deleteRange = document.getElementById("deletePages")?.value || ""
  const pagesToDelete = parsePageRange(deleteRange).flat()

  updateProgress(30, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)
  const newPdf = await PDFDocument.create()

  const allPages = pdf.getPageIndices()
  const pagesToKeep = allPages.filter((i) => !pagesToDelete.includes(i + 1))

  updateProgress(60, "Removing pages...")
  const pages = await newPdf.copyPages(pdf, pagesToKeep)
  pages.forEach((page) => newPdf.addPage(page))

  updateProgress(90, "Saving...")
  const pdfBytes = await newPdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function protectPDF() {
  const { PDFDocument } = PDFLib

  updateProgress(30, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)

  updateProgress(90, "Saving...")
  const pdfBytes = await pdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function convertToGrayscale() {
  const { PDFDocument } = PDFLib

  updateProgress(30, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)

  updateProgress(90, "Saving...")
  const pdfBytes = await pdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

async function genericPDFProcess() {
  const { PDFDocument } = PDFLib

  updateProgress(30, "Reading PDF...")
  const bytes = await uploadedFiles[0].arrayBuffer()
  const pdf = await PDFDocument.load(bytes)

  updateProgress(90, "Saving...")
  const pdfBytes = await pdf.save()
  processedBlob = new Blob([pdfBytes], { type: "application/pdf" })
}

// ===== Parse Page Range =====
function parsePageRange(rangeStr) {
  const ranges = []
  const parts = rangeStr.split(",").map((s) => s.trim())

  parts.forEach((part) => {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number)
      const range = []
      for (let i = start; i <= end; i++) range.push(i)
      ranges.push(range)
    } else {
      ranges.push([Number.parseInt(part)])
    }
  })

  return ranges
}

// ===== Progress Functions =====
function showProgress() {
  uploadArea.style.display = "none"
  fileList.style.display = "none"
  toolOptions.style.display = "none"
  progressContainer.classList.add("active")
  processBtn.disabled = true
}

function updateProgress(percent, text) {
  progressFill.style.width = percent + "%"
  progressText.textContent = text
}

function showResult() {
  progressContainer.classList.remove("active")
  resultArea.classList.add("active")
}

// ===== Reset Tool =====
function resetTool() {
  uploadedFiles = []
  processedBlob = null
  fileInput.value = ""
  fileList.innerHTML = ""
  uploadArea.style.display = "block"
  fileList.style.display = "flex"
  if (currentTool) renderToolOptions()
  progressContainer.classList.remove("active")
  resultArea.classList.remove("active")
  progressFill.style.width = "0%"
  updateProcessButton()
}

// ===== Download Result =====
function downloadResult() {
  if (!processedBlob) return

  const url = URL.createObjectURL(processedBlob)
  const a = document.createElement("a")
  a.href = url

  let extension = "pdf"
  if (
    processedBlob.type === "application/zip" ||
    currentTool.id.includes("to-jpg") ||
    currentTool.id.includes("to-png") ||
    currentTool.id === "split"
  ) {
    extension = "zip"
  }

  a.download = `${currentTool.id}_result.${extension}`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// ===== Initialize on Load =====
document.addEventListener("DOMContentLoaded", init)
