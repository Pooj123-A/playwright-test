
import { test, expect } from "@playwright/experimental-ct-react";
import App1742 from "./App1742.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1742 />);
  await expect(component).toContainText("Learn React");
});
