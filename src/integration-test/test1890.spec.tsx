
import { test, expect } from "@playwright/experimental-ct-react";
import App1890 from "../example/App1890.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1890 />);
  await expect(component).toContainText("Learn React");
});
