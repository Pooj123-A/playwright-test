
import { test, expect } from "@playwright/experimental-ct-react";
import App1681 from "./App1681.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1681 />);
  await expect(component).toContainText("Learn React");
});
