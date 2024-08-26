
import { test, expect } from "@playwright/experimental-ct-react";
import App1756 from "../example/App1756.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1756 />);
  await expect(component).toContainText("Learn React");
});
