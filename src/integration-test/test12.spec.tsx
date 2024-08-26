
import { test, expect } from "@playwright/experimental-ct-react";
import App12 from "../example/App12.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App12 />);
  await expect(component).toContainText("Learn React");
});
