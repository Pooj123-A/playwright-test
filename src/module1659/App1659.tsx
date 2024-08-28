
import { test, expect } from "@playwright/experimental-ct-react";
import App1659 from "./App1659.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1659 />);
  await expect(component).toContainText("Learn React");
});
