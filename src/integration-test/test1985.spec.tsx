
import { test, expect } from "@playwright/experimental-ct-react";
import App1985 from "../example/App1985.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1985 />);
  await expect(component).toContainText("Learn React");
});
