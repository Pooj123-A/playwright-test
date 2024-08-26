
import { test, expect } from "@playwright/experimental-ct-react";
import App1864 from "../example/App1864.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1864 />);
  await expect(component).toContainText("Learn React");
});
