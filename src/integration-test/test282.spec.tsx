
import { test, expect } from "@playwright/experimental-ct-react";
import App282 from "../example/App282.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App282 />);
  await expect(component).toContainText("Learn React");
});
