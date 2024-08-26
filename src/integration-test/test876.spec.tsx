
import { test, expect } from "@playwright/experimental-ct-react";
import App876 from "../example/App876.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App876 />);
  await expect(component).toContainText("Learn React");
});
