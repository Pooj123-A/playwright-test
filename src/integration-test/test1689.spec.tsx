
import { test, expect } from "@playwright/experimental-ct-react";
import App1689 from "../example/App1689.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1689 />);
  await expect(component).toContainText("Learn React");
});
