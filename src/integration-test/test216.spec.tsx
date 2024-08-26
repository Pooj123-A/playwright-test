
import { test, expect } from "@playwright/experimental-ct-react";
import App216 from "../example/App216.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App216 />);
  await expect(component).toContainText("Learn React");
});
