
import { test, expect } from "@playwright/experimental-ct-react";
import App410 from "../example/App410.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App410 />);
  await expect(component).toContainText("Learn React");
});
