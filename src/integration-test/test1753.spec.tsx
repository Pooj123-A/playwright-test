
import { test, expect } from "@playwright/experimental-ct-react";
import App1753 from "../example/App1753.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1753 />);
  await expect(component).toContainText("Learn React");
});
