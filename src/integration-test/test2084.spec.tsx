
import { test, expect } from "@playwright/experimental-ct-react";
import App2084 from "../example/App2084.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2084 />);
  await expect(component).toContainText("Learn React");
});
