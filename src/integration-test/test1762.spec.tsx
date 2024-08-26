
import { test, expect } from "@playwright/experimental-ct-react";
import App1762 from "../example/App1762.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1762 />);
  await expect(component).toContainText("Learn React");
});
