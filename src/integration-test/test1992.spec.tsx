
import { test, expect } from "@playwright/experimental-ct-react";
import App1992 from "../example/App1992.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1992 />);
  await expect(component).toContainText("Learn React");
});
