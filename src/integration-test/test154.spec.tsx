
import { test, expect } from "@playwright/experimental-ct-react";
import App154 from "../example/App154.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App154 />);
  await expect(component).toContainText("Learn React");
});
