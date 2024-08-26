
import { test, expect } from "@playwright/experimental-ct-react";
import App2965 from "../example/App2965.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2965 />);
  await expect(component).toContainText("Learn React");
});
