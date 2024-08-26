
import { test, expect } from "@playwright/experimental-ct-react";
import App560 from "../example/App560.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App560 />);
  await expect(component).toContainText("Learn React");
});
