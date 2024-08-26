
import { test, expect } from "@playwright/experimental-ct-react";
import App2036 from "../example/App2036.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2036 />);
  await expect(component).toContainText("Learn React");
});
