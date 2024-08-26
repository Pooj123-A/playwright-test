
import { test, expect } from "@playwright/experimental-ct-react";
import App480 from "../example/App480.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App480 />);
  await expect(component).toContainText("Learn React");
});
