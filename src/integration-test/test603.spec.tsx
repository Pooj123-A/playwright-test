
import { test, expect } from "@playwright/experimental-ct-react";
import App603 from "../example/App603.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App603 />);
  await expect(component).toContainText("Learn React");
});
