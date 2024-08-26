
import { test, expect } from "@playwright/experimental-ct-react";
import App978 from "../example/App978.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App978 />);
  await expect(component).toContainText("Learn React");
});
