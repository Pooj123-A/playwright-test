
import { test, expect } from "@playwright/experimental-ct-react";
import App381 from "../example/App381.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App381 />);
  await expect(component).toContainText("Learn React");
});
