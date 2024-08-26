
import { test, expect } from "@playwright/experimental-ct-react";
import App1816 from "../example/App1816.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1816 />);
  await expect(component).toContainText("Learn React");
});
