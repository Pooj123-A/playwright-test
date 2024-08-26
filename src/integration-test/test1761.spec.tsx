
import { test, expect } from "@playwright/experimental-ct-react";
import App1761 from "../example/App1761.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1761 />);
  await expect(component).toContainText("Learn React");
});
