
import { test, expect } from "@playwright/experimental-ct-react";
import App2784 from "../example/App2784.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2784 />);
  await expect(component).toContainText("Learn React");
});
