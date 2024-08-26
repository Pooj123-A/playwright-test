
import { test, expect } from "@playwright/experimental-ct-react";
import App2031 from "../example/App2031.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2031 />);
  await expect(component).toContainText("Learn React");
});
