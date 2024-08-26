
import { test, expect } from "@playwright/experimental-ct-react";
import App1846 from "../example/App1846.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1846 />);
  await expect(component).toContainText("Learn React");
});
