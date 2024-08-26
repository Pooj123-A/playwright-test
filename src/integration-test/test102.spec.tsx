
import { test, expect } from "@playwright/experimental-ct-react";
import App102 from "../example/App102.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App102 />);
  await expect(component).toContainText("Learn React");
});
