
import { test, expect } from "@playwright/experimental-ct-react";
import App307 from "../example/App307.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App307 />);
  await expect(component).toContainText("Learn React");
});
