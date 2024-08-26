
import { test, expect } from "@playwright/experimental-ct-react";
import App2724 from "../example/App2724.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2724 />);
  await expect(component).toContainText("Learn React");
});
