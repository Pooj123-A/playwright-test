
import { test, expect } from "@playwright/experimental-ct-react";
import App2064 from "../example/App2064.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2064 />);
  await expect(component).toContainText("Learn React");
});
