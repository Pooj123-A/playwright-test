
import { test, expect } from "@playwright/experimental-ct-react";
import App2079 from "../example/App2079.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2079 />);
  await expect(component).toContainText("Learn React");
});
