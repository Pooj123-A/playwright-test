
import { test, expect } from "@playwright/experimental-ct-react";
import App2962 from "../example/App2962.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2962 />);
  await expect(component).toContainText("Learn React");
});
