
import { test, expect } from "@playwright/experimental-ct-react";
import App1747 from "../example/App1747.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1747 />);
  await expect(component).toContainText("Learn React");
});
