
import { test, expect } from "@playwright/experimental-ct-react";
import App775 from "../example/App775.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App775 />);
  await expect(component).toContainText("Learn React");
});
