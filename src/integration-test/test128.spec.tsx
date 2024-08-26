
import { test, expect } from "@playwright/experimental-ct-react";
import App128 from "../example/App128.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App128 />);
  await expect(component).toContainText("Learn React");
});
