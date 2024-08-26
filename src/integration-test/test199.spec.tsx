
import { test, expect } from "@playwright/experimental-ct-react";
import App199 from "../example/App199.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App199 />);
  await expect(component).toContainText("Learn React");
});
