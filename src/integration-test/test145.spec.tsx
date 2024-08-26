
import { test, expect } from "@playwright/experimental-ct-react";
import App145 from "../example/App145.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App145 />);
  await expect(component).toContainText("Learn React");
});
