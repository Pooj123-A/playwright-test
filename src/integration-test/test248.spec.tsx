
import { test, expect } from "@playwright/experimental-ct-react";
import App248 from "../example/App248.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App248 />);
  await expect(component).toContainText("Learn React");
});
